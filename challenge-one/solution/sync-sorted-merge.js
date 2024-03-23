"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
    const logs = logSources.map(logSource => logSource.pop());

    while (logs.length > 0) {
        let earliestLogIndex = -1;
        let earliestLogDate = null;

        for (let i = 0; i < logs.length; i++) {
            if (!logs[i]) continue;
            if (!earliestLogDate || logs[i].date < earliestLogDate) {
                earliestLogDate = logs[i].date;
                earliestLogIndex = i;
            }
        }

        if (earliestLogIndex >= 0) {
            printer.print(logs[earliestLogIndex]);
            logs[earliestLogIndex] = logSources[earliestLogIndex].pop();
        }
    }

    printer.done();
};
