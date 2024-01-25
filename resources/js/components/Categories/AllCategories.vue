<template>
<div>
<h2 class="text-center">Liste des catégories</h2>
<table class="table">
<thead>
<tr>
<th>Nom Catégorie</th>
<th>Image</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<tr v-for="cat in Categories" :key="cat.id">
<td>{{cat.nomcategorie}}</td>
<td><img :src="cat.imagecategorie" :alt=cat.nomcategorie
width="70"></td>
<td>
<button @click.prevent="deleteCategorie(cat.id)"
class="btn btn-danger">Delete</button></td>
</tr>
</tbody>
</table>
</div>
</template>
<script>
export default {
data() {
return {
Categories: []
}
},
mounted() {
this.getCategories();
},
methods: {
deleteCategorie(id) {
this.axios
.delete(`http://localhost:8000/essai/categories/${id}`)
.then(res => {
console.log(res)
this.getCategories();
})
.catch(error => {
console.log(error)
});
},
getCategories(){
this.axios
.get('http://localhost:8000/essai/categories/')
.then(response => {
this.Categories = response.data;
});
}
}
}
</script>