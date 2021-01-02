export function Pager(props) {
    const { activePageNumber, maxPageNumber } = props;

    const links = [];
    for (let i = 1; i <= maxPageNumber; i++) {
        if (i === activePageNumber) {
            links.push(<span key={i}>{i}{` `}</span>);
            continue;
        }

        links.push(<a key={i} href={`?page=${i}`} >{i}{` `}</a>);
    }

    return links;
}