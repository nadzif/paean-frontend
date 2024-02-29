import {
    LOAD_JOB,
    LOAD_JOB_DETAIL,
    LOAD_JOB_LIMIT_3,
    loadJobDetailSuccess,
    loadJobLimit3Success,
    loadJobSuccess
} from "../actions/job";

const jobLoadedFlow = ({log, api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === LOAD_JOB) {
        let job = await api.job.getJob(action.payload);
        // job = spliceIntoChunks(job.data, 4)
        dispatch(loadJobSuccess(job));
    } else if (action.type === LOAD_JOB_LIMIT_3) {
        let job = await api.job.getJob(1);
        job = spliceIntoChunks(job.data, 3)
        dispatch(loadJobLimit3Success(job[0]));
    } else if (action.type === LOAD_JOB_DETAIL) {
        const job = await api.job.getJob();
        let index = await job.data.findIndex(x => x.id === parseInt(action.payload));
        dispatch(loadJobDetailSuccess(job.data[index]));
    }
}

function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const job = [
    jobLoadedFlow
];

export default job