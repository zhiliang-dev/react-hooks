import dayjs from 'dayjs';
let relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
require('dayjs/locale/zh-cn');
dayjs.locale('zh-cn');

function FromNow(props) {
  let { data } = props;
  return dayjs(data).fromNow();
}

export default FromNow;
