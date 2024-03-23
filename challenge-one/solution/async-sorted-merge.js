"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = async (logSources, printer) => {
    const logPromises = logSources.map(logSource => logSource.popAsync());

    while (logPromises.length > 0) {
        const earliestLogIndex = await Promise.race(logPromises.map((p, i) => p.then(() => i)));
        const logEntry = await logPromises[earliestLogIndex];

        if (logEntry) {
            printer.print(logEntry);
            logPromises[earliestLogIndex] = logSources[earliestLogIndex].popAsync();
        } else {
            logPromises.splice(earliestLogIndex, 1);
        }
    }

    printer.done();
};
