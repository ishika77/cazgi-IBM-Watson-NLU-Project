const express = require('express');
const dotenv = require('dotenv')

function getNULInstance(){
    let api_key =process.env.API_KEY;
    let api_url =process.env.API_URL;

    const NaturalLnaguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/V1');
    const {IamAuthenticator} = require('ibm-watson/auth');

    const naturalLnaguageUnderstandingV1 = new NaturalLnaguageUnderstandingV1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey:api_key,
        }),
        serviceUrl: api_url,
    });
    return NaturalLnaguageUnderstandingV1;
}
