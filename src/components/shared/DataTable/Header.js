import { FilterPopup } from '../FilterPopup';
import { updateSearch } from '../../../helpers/updateSearch'

export function Header(props) { //This is a private component to DataTable. Never use it!!!
    const { headers, filterProperty, filterValue, isDescending, openFilter, getSortButton, getFilterButton, handleFilterChange, handleFilterRemove } = props;

    return (
        <thead>
            <tr>
                {headers.map((header, idx) =>
                    <th key={idx}>
                        <button className="headerbutton" onClick={() => updateSearch({
                            sorting: header.propertyName,
                            direction: isDescending ? 'asc' : 'desc',
                            filterProperty,
                            filterValue
                        })}>{header.text}</button>
                        {header.isSortable && getSortButton(header)}
                        {header.isSortable && getFilterButton(header.propertyName)}
                        <FilterPopup
                            visible={(header.propertyName === openFilter && openFilter) ||
                                (header.propertyName === filterProperty && filterValue !== '')}
                            filterColumn={header.propertyName}
                            filterValue={filterValue}
                            isFiltered={filterProperty === header.propertyName}
                            onConfirm={handleFilterChange}
                            onRemove={handleFilterRemove}
                        />
                    </th>
                )}
            </tr>
        </thead>
    )
}