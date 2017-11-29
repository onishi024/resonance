const apikey = 'be6f265667a45a0860cd1694c8c6a23f1a0aa7bb'

const headers = {'X-Redmine-API-Key' : apikey,
                 'Content-Type': 'application/json'}

const url = `http://127.0.0.1:8080/redmine/`

//redmine/datakind.json
export const get1 = datakind =>
  fetch(url + datakind + `.json`,
    {method: 'GET',
     headers: headers})
  .then(response => response.json())
  .then(json => json[datakind])

//redmine/datakind1/datakind2.json?format
export const get2 = (datakind1, datakind2, format) =>
  fetch(url + datakind1 + `/` + datakind2 + `.json?` + format,
    {method: 'GET',
     headers: headers})
  .then(res =>
    res.ok ? res.json(): console.log('Network response was not ok.'))
  .catch(err => console.log('There has been a problem with your fetch operation: ' + err.message))

//redmine/datakind.json?format
export const get3 = (datakind, format) =>
  fetch(url + datakind + `.json?` + format,
    {method: 'GET',
     headers: headers})
  .then(response => response.json())
  .then(json => json[datakind])

//post(未検討)
export const post = issue =>
  fetch(url,
    {method: 'POST',
     headers: headers,
     body: JSON.stringify(issue)})

//redmine/datakind/update.issue.id.json
export const put = (datakind, update) => {
  console.log(url + datakind + `/` + update.issue.id + `.json`)
  fetch(url + datakind + `/` + update.issue.id + `.json` ,
    {method: 'PUT',
     headers: headers,
     body: JSON.stringify(update)})
   .then(res =>
     res.ok ? res.json(): console.log('Network response was not ok.'))
   .catch(err => console.log('There has been a problem with your put operation: ' + err.message))
}
