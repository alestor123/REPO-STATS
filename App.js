var axios = require('axios')
module.exports = async (username,name,token) => {
if(!(username&&name)) throw Error('Username or repo name not found')
if(token) axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
var data = await axios.get(`https://api.github.com/repos/${username}/${name}`)
return {id:data.data.id,name:data.data.name,fullname:data.data.full_name,owner:data.data.owner.login,description:data.data.description,fork:data.data.fork,ur:data.data.html_url,created:data.data.created_at,lastupdated:data.data.updated_at,pushed:data.data.pushed_at,homepage:data.data.homepage,
issues:data.data.open_issues,license:data.data.license,mainlang:data.data.language,size:data.data.size,branch:data.data.default_branch,archived:data.data.archived
}
}