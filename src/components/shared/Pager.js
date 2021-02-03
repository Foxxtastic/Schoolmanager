import { paginationSize, paginationRange } from "../../config";
import { updateSearch } from "../../helpers/updateSearch";

function isInRange(element, start, end) {
    if (element >= start && element <= end) {
        return true;
    }
    return false;
}

function getLinks(activePageNumber, maxPageNumber, start, end) {
    const links = [];
    for (let i = 1; i <= maxPageNumber; i++) {
        if (i === activePageNumber) {
            links.push({ isActivePage: true, isVisible: true });
            continue;
        }
        if (isInRange(i, start, end) || i === 1 || i === maxPageNumber) {
            links.push({ isActivePage: false, isVisible: true });
            continue;
        }
        links.push({ isActivePage: false, isVisible: false });
    }
    return links;
}

function getRange(activePageNumber, maxPageNumber) {
    let start = 0;
    let end = 0;

    if (activePageNumber - paginationRange > 0 && activePageNumber + paginationRange <= maxPageNumber) {
        start = activePageNumber - paginationRange;
        end = activePageNumber + paginationRange;
    }

    if (activePageNumber - paginationRange < 1) {
        start = 1;
    }

    if (activePageNumber + paginationRange > maxPageNumber) {
        end = maxPageNumber;
    }

    if (start === 1 && end === 0) {
        end = paginationSize;
    }

    if (end === maxPageNumber && start === 0) {
        start = maxPageNumber - paginationSize + 1;
    }

    return {
        start,
        end
    };
}

function getPagerButton(isActivePage, pageIndex) {
    const pageNumber = pageIndex + 1;
    return isActivePage ?
        <button disabled key={pageNumber} >{pageNumber}{` `}</button> :
        <button key={pageNumber} onClick={() => updateSearch({ page: pageNumber })}>{pageNumber}{` `}</button>;
}

export function Pager(props) {
    const { activePageNumber, maxPageNumber } = props;

    if (maxPageNumber === undefined) {
        return null;
    }

    const { start, end } = getRange(activePageNumber, maxPageNumber);

    const links = getLinks(activePageNumber, maxPageNumber, start, end);

    if (links.length === 1) {
        const onlyPage = links[0];
        return getPagerButton(onlyPage.isActivePage, 0);    // 0 represents the first (the only) page.
    }

    const result = [];

    for (let j = 1; j < links.length; j++) {
        const previousIndex = j - 1;
        const previous = links[j - 1];
        const current = links[j];

        if (previous.isVisible) {
            const button = getPagerButton(previous.isActivePage, previousIndex);
            result.push(button);
        }
        if (previous.isVisible === false && current.isVisible === true) {
            result.push(<span key={`dot${previousIndex}`} className='pagerspacing'>...</span>);
        }
    }
    if (links.length - 1 > 0) {
        const { isActivePage } = links[links.length - 1]
        const button = getPagerButton(isActivePage, links.length - 1);
        result.push(button);
    }

    return result;
}