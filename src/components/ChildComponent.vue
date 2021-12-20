<template>
  <h2> Jose Public GitHub Repos</h2>
  <table class="repo-table">
    <tr>
      <th>Avatar</th>
      <th>Repo Name</th>
      <th>Repo Link</th>
    </tr>
    <tr v-for='repo in repos' :key='repo.id'>
      <td><img width="20" height="20" :src="repo.owner.avatar_url" /></td>
      <td>{{repo.name}}</td>
      <td><a :href="repo.html_url"> Link to Fork</a></td>
    </tr>
  </table>
</template>
<style>
  .repo-table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  .repo-table td,
  .repo-table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .repo-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .repo-table tr:hover {
    background-color: #ddd;
  }

  .repo-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #201a8c;
    color: white;
  }

</style>

<script>
  export default {
    name: 'ChildComponent',
    props: {
      repos: Array
    }
  }

</script>
