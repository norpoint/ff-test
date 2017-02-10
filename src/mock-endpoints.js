import fetchMock from 'fetch-mock';

const mockProcessTime = 2000;

const resolveMockResponse = (url, response) => {
    return new Promise(resolve => {
        console.log(`request for ${url} delayed ${mockProcessTime}ms => mock response:`, response);
        setTimeout(() => resolve(response), mockProcessTime);
    });
}

fetchMock.get(/http:\/\/fubar\.com\/person\/.*/, url => resolveMockResponse(url, { val1: 1, val2: 2 }));
fetchMock.get(/http:\/\/fubar\.com\/facility\/.*/, url => resolveMockResponse(url, { val3: 3, val4: 4 }));
fetchMock.get(/http:\/\/fubar\.com\/exposure\/.*/, url => resolveMockResponse(url, { val5: 5 }));
