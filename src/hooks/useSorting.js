import { useQuery } from "./useQuery";

export function useSorting() {
    const query = useQuery();
    return query.get('sorting');
}