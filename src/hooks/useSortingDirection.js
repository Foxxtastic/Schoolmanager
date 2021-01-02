import { useQuery } from "./useQuery";

export function useSortingDirection() {
    const query = useQuery();
    const direction = query.get('direction');
    const isDescending = direction && direction.toUpperCase() === 'DESC' ? true : false;

    return {
        direction,
        isDescending
    }
}