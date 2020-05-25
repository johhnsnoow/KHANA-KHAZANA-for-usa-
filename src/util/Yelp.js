const apiKey = 'jI4ooO0w7GDdm0MYn0-GFIbaYNc7qyQiGnvj2uLQ-iRcKD69V3thSO9oem-XklvWGvMU9mYt2qEVrAR4hcijMKI0Ob4UGUNVK4KMKjkic_Ag9_TMa9nDYFa5bHLDXnYx';
const Yelp = {
    search(term,location,sortBy)
    {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization : `Bearer ${apiKey}`,
            },
        }).then((response)=> {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse);
              return jsonResponse.businesses.map(business => ({
                  id: business.id,
                  imgSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.rating,
                  reviewCount: business.review_count
                }));
            }
          });
    }
}
export default Yelp;
