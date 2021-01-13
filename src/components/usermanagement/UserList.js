import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { pageSize } from '../../config';
import { Button } from "../shared/Button";
import { ConfirmPopup } from "../shared/ConfirmPopup";
import { DataTable } from "../shared/DataTable";
import { ValidationErrors } from "../shared/ValidationErrors";
import { usePageNumber } from '../../hooks/usePageNumber';
import { useSorting } from "../../hooks/useSorting";
import { useSortingDirection } from "../../hooks/useSortingDirection";
import { useFilterProperty } from "../../hooks/useFilterProperty";
import { useFilterValue } from "../../hooks/useFilterValue";
import { updateSearch } from '../../helpers/updateSearch';
import moment from "moment";
import { faCheck, faCross, faExclamationTriangle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "../shared/DatePicker";

const headers = [
    { text: "EmailAddress", propertyName: 'EmailAddress', isSortable: true },
    { text: "IsActive", propertyName: 'IsActive', isSortable: true },
    { text: "LastLogin", propertyName: 'LastLogin', isSortable: true },
    { text: "", isSortable: false }
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function UserList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [users, setUsers] = useState(undefined);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeIdForDelete, setActiveIdForDelete] = useState(null);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);
    const [hoverOnIcon, setHoveronIcon] = useState(null);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'EmailAddress' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'EmailAddress' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    const { error, afterUpdate, afterDelete, afterPaging, linkToCreate, onUpdate, onDelete, isLoading } = props;

    const setUsersFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setUsers(listResponse.items);
    }

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setUsers(listResponse.items);
            setMaxPageNumber(maxPage);
        });
    }, [activePageNumber, afterPaging, sortingProperty, isDescending, filterProperty, filterValue]);

    const openEditor = (id) => {
        setEditor({
            isEditMode: true,
            rowKey: id
        })
    }

    const closeEditor = () => {
        setEditor({
            isEditMode: false,
            rowKey: null
        })
    }

    const fireAfterUpdateEvent = () => {
        if (afterUpdate !== undefined) {
            afterUpdate(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue)
                .then(setUsersFromServer);
        }
    }

    const onSubmit = (id, formData) => {
        const closeEditorAfterUpdate = () => {
            closeEditor();
            fireAfterUpdateEvent();
        }

        if (onUpdate === undefined) {
            closeEditorAfterUpdate();
        }

        onUpdate(id, formData)
            .then(() => {
                closeEditorAfterUpdate();
            });
    }

    const handleDeleteModalShown = (id) => {
        setIsModalVisible(true);
        setActiveIdForDelete(id);
    }

    const handleDeleteModalConfirm = () => {
        onDelete(activeIdForDelete)
            .then(() => afterDelete(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue))
            .then(setUsersFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    if (users === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <DataTable
                error={error}
                isLoading={isLoading}
                headers={headers}
                sortingProperty={sortingProperty}
                isDescending={isDescending}
                filterProperty={filterProperty}
                filterValue={filterValue}
                items={users}
                activePageNumber={activePageNumber}
                maxPageNumber={maxPageNumber}
                getRowForItem={(user, idx) => {
                    const isEditing = editor.isEditMode && editor.rowKey === user.Id;
                    return (
                        <tr key={idx}>
                            {error && error.rowidx === user.Id &&
                                <td className="error">
                                    <FontAwesomeIcon
                                        className="tx-lred"
                                        icon={faExclamationTriangle}
                                        onMouseEnter={() => setHoveronIcon(error.rowidx)}
                                        onMouseLeave={() => setHoveronIcon(null)}
                                    />
                                    {hoverOnIcon === error.rowidx && <div className="tooltip">{error.message}</div>}
                                </td>}
                            {error && error.rowidx !== user.Id &&
                                <td className="error"></td>}
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="EmailAddress" defaultValue={user.EmailAddress} ref={register({ required: true })} />
                                        <ValidationErrors name="EmailAddress" errors={errors} />
                                    </> :
                                    <span>{user.EmailAddress}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input
                                            name="IsActive"
                                            defaultValue={(user.IsActive === true) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCross} />}
                                            ref={register({ required: true })} />
                                        <ValidationErrors name="IsActive" errors={errors} />
                                    </> :
                                    <span>{(user.IsActive === true) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimesCircle} />}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <DatePicker name="LastLogin" defaultValue={moment(user.LastLogin).format("YYYY-MM-DD")} ref={register({ required: true })} />
                                        <ValidationErrors name="LastLogin" errors={errors} />
                                    </> :
                                    <span>{(user.LastLogin !== null) ? moment(user.LastLogin).format("YYYY-MM-DD") : "Not Logged in yet."}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(user.Id, formData))} />
                                        <Button disabled={isLoading} text="Cancel" handleClick={() => closeEditor()} />
                                    </> :
                                    <>
                                        <Button disabled={isLoading} text="Modify" handleClick={() => openEditor(user.Id)} />
                                        <Button disabled={isLoading} text="Delete" handleClick={() => handleDeleteModalShown(user.Id)} />
                                    </>}
                            </td>
                        </tr>
                    );
                }}
            />
            <div className="footer">
                <Link to={linkToCreate}>
                    <Button customClass="button-withoutmargin" text="Create" />
                </Link>
            </div>
        </ div>
    );
}