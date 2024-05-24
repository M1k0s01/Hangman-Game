export const sortRecords = (records) => {
    return records.sort((a, b) => b.score - a.score);
};
