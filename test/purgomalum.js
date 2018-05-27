var chai = require('chai')
  , chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);
require('mocha');
var commons = require('../resources/commons.json');

xdescribe('TC1', () => {
  it('Should replace content of profanity.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC1_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example ****');
        done();
      });
  });
});

xdescribe('TC2', () => {
  it('Should replace content of profanity and add a new word.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC2_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example *********');
        done();
      });
  });
});

xdescribe('TC3', () => {
  it('Should replace content of profanity, add a new word and replace with new text.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC3_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example [REPLACED]');
        done();
      });
  });
});

xdescribe('TC4', () => {
  it('Should replace content of profanity, add a new word and replace the word with chars.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC4_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example |||||||||');
        done();
      });
  });
});

xdescribe('TC5', () => {
  it('Should replace content of profanity and replace it with text.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC5_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example [REPLACED]');
        done();
      });
  });
});

xdescribe('TC6', () => {
  it('Should replace content of profanity and replace it with char: "~" ', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC6_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example ~~~~');
        done();
      });
  });
});

xdescribe('TC7', () => {
  it('Should replace content of profanity even when it has character alternate.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC7_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example ****');
        done();
      });
  });
});

xdescribe('TC8', () => {
  it('Should not replace content of profanity when it is a safeword.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC8_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example class');
        done();
      });
  });
});

xdescribe('TC9', () => {
  it('Should not replace content of profanity when add parameters contains more than 10 words.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC9_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('error').eql('User Black List Exceeds Limit of 10 Words.');
        done();
      });
  });
});

xdescribe('TC10', () => {
  it('Should not replace content of profanity when add parameters exceeds 200 chars. ', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC10_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('error').eql('User Black List Exceeds Limit of 10 Words.');
        done();
      });
  });
});

xdescribe('TC11', () => {
  it('Should not replace content of profanity when fill_text exceeds 20 characters', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC11_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('error').eql('User Replacement Text Exceeds Limit of 20 Characters.');
        done();
      });
  });
});

xdescribe('TC12', () => {
  it('Should not replace content of profanity when fill_text contains unexpected characters like ";"', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC12_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('error').eql('Invalid User Replacement Text');
        done();
      });
  });
});

xdescribe('TC13', () => {
  it('Should not replace content of profanity when fill_char contains unexpected characters like ";"', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC13_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('error').eql('Invalid User Replacement Characters');
        done();
      });
  });
});

xdescribe('TC14', () => {
  it('Should not replace content of profanity when add parameter exceeds 10 words and fill_text exceeds 20 characters.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC14_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('error').eql('User Replacement Text Exceeds Limit of 20 Characters.');
        done();
      });
  });
});

describe('TC15', () => {
  it('Should replace content of profanity even with character alternate and should not replace safeword.', (done) => {
    chai.request(commons.url + commons.method)
      .get(commons.TC15_parameters)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('result').eql('this is an example *** class cl***');
        done();
      });
  });
});