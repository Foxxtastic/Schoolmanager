import { paginationSize, paginationRange } from "../../config";
import { updateSearch } from "../../helpers/updateSearch";

function isInRange(element, start, end) {
    if (element >= start && element <= end) {
        return true;
    }
    return false;
}

export function Pager(props) {
    const { activePageNumber, maxPageNumber } = props;

    if (maxPageNumber === undefined) {
        return null;
    }

    const links = [];
    const result = [];
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

    const addLink = (isActivePage, isVisible, idx) => {
        isActivePage ?
            links.push({ link: <button disabled key={idx} >{idx}{` `}</button>, isVisible }) :
            links.push({ link: <button key={idx} onClick={() => updateSearch({ page: idx })} >{idx}{` `}</button>, isVisible });
    }

    for (let i = 1; i <= maxPageNumber; i++) {
        if (i === activePageNumber) {
            addLink(true, true, i);
            continue;
        }
        if (isInRange(i, start, end) || i === 1 || i === maxPageNumber) {
            addLink(false, true, i);
            continue;
        }
        addLink(false, false, i);
    }

    console.log(links);

    for (let j = 1; j < links.length; j++) {
        if (links[j - 1].isVisible) {
            result.push(links[j - 1].link);
        }
        if (links[j - 1].isVisible === false && links[j].isVisible === true) {
            result.push(<span key={`dot${j}`}>...</span>);
        }
    }

    result.push(links[links.length - 1].link);

    return result;
}