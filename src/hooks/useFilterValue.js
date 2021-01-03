import { useQuery } from "./useQuery";

export function useFilterValue() {
    const query = useQuery();
    return query.get('filterValue');
}