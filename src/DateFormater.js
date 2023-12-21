import moment from 'moment';

const DateFormater = ({date}) => {
    return moment(date).format('ll')
}

export default DateFormater