import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITKEY,
});

export async function directories() {
  let response = await octokit.request("GET /users/{username}/repos", {
    username: "kujuh3",
  });
  return response;
}

export async function commits() {
  let contributions = {
    totalContributions: 0,
  };
  let currdate = new Date(Date.now());
  let beginningdate = new Date(Date.now());
  beginningdate.setMonth(0) && beginningdate.setDate(0)
  currdate.setMonth(0) && currdate.setDate(0)
  beginningdate = new Date(beginningdate.setFullYear(2019)).toISOString();
  for (
    let i = new Date(beginningdate).getFullYear();
    i <= new Date(currdate).getFullYear();
    i++
  ) {
    //Dates in JS are such *********
    let toYear = new Date(beginningdate).setFullYear(i + 1);
    let fromYear = new Date(beginningdate).setFullYear(i);
    console.log({
      "FROMYEAR" : new Date(fromYear).toISOString(),
      "TOYEAR": new Date(toYear).toISOString()
    })
    const headers = {
      Authorization: `bearer ${process.env.REACT_APP_GITUSERKEY}`,
    };
    const body = {
      query: `query {
            user(login: "kujuh3") {
              name
              contributionsCollection (from: "${new Date(
                fromYear
              ).toISOString()}" to: "${new Date(toYear).toISOString()}") { 
                contributionCalendar {
                  colors
                  totalContributions
                }
              }
            }
          }`,
    };
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    })
      .then((data) => data.json())
      .then((result) => {
        contributions[i+1] =
          result.data.user.contributionsCollection.contributionCalendar.totalContributions;
        contributions["totalContributions"] +=
          result.data.user.contributionsCollection.contributionCalendar.totalContributions;
      });
  }
  return await contributions;
}
