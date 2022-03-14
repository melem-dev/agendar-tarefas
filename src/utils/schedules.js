const { v4: setID } = require("uuid");
const schedules = require("node-schedule");

let scheduledJobs = {};

module.exports = {
  newJob: ({ title, date }, cb) => {
    const ID = setID();

    scheduledJobs[ID] = {
      title,
      date,
      job: schedules.scheduleJob(date, cb),
    };

    return { id: ID };
  },
  cancelJob: (id) => {
    try {
      const job = scheduledJobs[id].job;

      if (!job) throw new Error();

      schedules.cancelJob(job);

      delete scheduledJobs[id];

      console.log(scheduledJobs);

      return;
    } catch (error) {
      console.log(error.message);
      return;
    }
  },
  jobs: () => {
    try {
      const listeds = [];

      for (let x in scheduledJobs) {
        listeds.push({
          id: x,
          title: scheduledJobs[x].title,
          date: scheduledJobs[x].date.toLocaleString("pt-br"),
        });
      }

      const cbs = schedules.scheduledJobs;

      return { listeds, cbs };
    } catch (error) {
      return false;
    }
  },
};
