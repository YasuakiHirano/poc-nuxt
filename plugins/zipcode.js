export default (context, inject) => {
    const zipcode = async function(zipcode) {
        return await this.$axios.get(`/zipApi/api/search?zipcode=${zipcode}`);
    }

    inject('zipcode', zipcode);
    context.$zipcode = zipcode;
  }