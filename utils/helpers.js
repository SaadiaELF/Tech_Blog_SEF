module.exports = {
  format_time: (date) => {
    // Format time as HH:MM:SS
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
};
