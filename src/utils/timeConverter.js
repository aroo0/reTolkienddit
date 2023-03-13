// export function getTimeAgo(timestamp) {
//     const currentTime = Date.now();
//     const timeDiff = (currentTime - timestamp * 1000) / 1000; // convert to seconds
  
//     // define the time periods in seconds
//     const periods = {
//       year: 12 * 30 * 24 * 60 * 60,
//       month: 30 * 24 * 60 * 60,
//       day: 24 * 60 * 60,
//       hour: 60 * 60,
//       minute: 60,
//     };
  
//     // iterate over the time periods to determine the most appropriate one
//     for (const period in periods) {
//       const seconds = periods[period];
//       const numPeriodsAgo = Math.floor(timeDiff / seconds);
  
//       if (numPeriodsAgo >= 1) {
//         return `${numPeriodsAgo} ${period}${numPeriodsAgo !== 1 ? 's' : ''} ago`;
//       }
//     }
  
//     return 'just now'; // if the time is less than a minute ago


// }

export function getTimeAgo(timestamp) {
    const now = new Date();
    const secondsAgo = Math.floor((now.getTime() - timestamp * 1000) / 1000);
    if (secondsAgo < 60) {
      return `${secondsAgo} seconds ago`;
    }
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
      return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
    }
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) {
      return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
    }
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 30) {
      return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
    }
    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo < 12) {
      return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
    }
    const yearsAgo = Math.floor(monthsAgo / 12);
    return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`;
}