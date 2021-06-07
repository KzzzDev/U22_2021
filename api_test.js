const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: '6qSBPhfVNU7Q-4_u3yg1dbYruo9IUWafo6IuyLWwiFxR',
  }),
  serviceUrl: 'https://api.jp-tok.speech-to-text.watson.cloud.ibm.com/instances/59117c1c-fab4-43b6-9803-ad4fe6e3ca62',
});

const getModelParams = {
  modelId: 'en-US_BroadbandModel',
};

speechToText.getModel(getModelParams)
  .then(speechModel => {
    console.log(JSON.stringify(speechModel, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });