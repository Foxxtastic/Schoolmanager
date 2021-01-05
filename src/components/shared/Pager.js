import { updateSearch } from "../../helpers/updateSearch";

export function Pager(props) {
    const { activePageNumber, maxPageNumber } = props;

    const links = [];
    for (let i = 1; i <= maxPageNumber; i++) {
        if (i === activePageNumber) {
            links.push(<button disabled key={i}>{i}{` `}</button>);
            continue;
        }

        links.push(<button key={i} onClick={() => updateSearch({ page: i })} >{i}{` `}</button>);
    }

    return links;
}