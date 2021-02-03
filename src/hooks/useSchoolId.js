import { useQuery } from "./useQuery";

export function useSchoolId() {
    const query = useQuery();
    return query.get('schoolId');
}