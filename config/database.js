module.exports = {
  development: {
    driver: "memory"
  },
  func01: {
    driver: "mongodb"
  , url:    "mongodb://admin:12345678MM@linus.mongohq.com:10003/macross-func01"
  },
  qa01: {
    driver: "mongodb"
  , url:    "mongodb://admin:12345678MM@paulo.mongohq.com:10003/macross-qa01"
  },
  demo01: {
    driver: "mongodb"
  , url:    "mongodb://admin:12345678MM@alex.mongohq.com:10003/macross-demo01"
  },
  stage01: {
    driver: "mongodb"
  , url:    "mongodb://admin:12345678MM@alex.mongohq.com:10004/macross-stage01"
  },
  prod01: {
    driver: "mongodb"
  , url:    "mongodb://admin:12345678MM@dharma.mongohq.com:10003/macross-prod01"
  }
};
