function setGDPRParam() {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var gdpr = urlParams.get("gdpr");
      window.localStorage.setItem("gdpr", gdpr);
      return { error: null };
    } catch(e) {
      return { error: 'localstorage disabled' }
    }
  }