function makeServiceCall(methodType, url, async = true, data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(methodType, url, async);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(`Error: ${xhr.status}`);
      }
    };

    xhr.onerror = () => reject("Network Error");

    xhr.send(data ? JSON.stringify(data) : null);
  });
}
