import moment from 'moment'

export function formatAsDate(date) {
    return moment(date).format("YYYY-MM-DD");
}