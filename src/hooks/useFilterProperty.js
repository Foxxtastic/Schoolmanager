import { useQuery } from "./useQuery";

export function useFilterProperty() {
    const query = useQuery();
    return query.get('filterProperty');
}