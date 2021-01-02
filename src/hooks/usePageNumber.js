import { useQuery } from "./useQuery";

export function usePageNumber() {
    const query = useQuery();
    const pageAsString = query.get('page');
    if (pageAsString === null || pageAsString === undefined) {
        return null;
    }
    return parseInt(pageAsString, 10);
}