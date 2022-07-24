const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: [],
			currentID: 0
			
			
		},
		actions: {

			getContacts: () => {
				fetch('https://assets.breatheco.de/apis/fake/contact/agenda/Luffy85', {
					method: "GET",
					
					headers: {
					  "Content-Type": "application/json"
					}
				  }).then(res => res.json())
				  .then(data => {
					setStore({contactos:data})
				  })
				},
				createContact: (obj) => {
					fetch('https://assets.breatheco.de/apis/fake/contact/', {
						method: "POST",
						body:JSON.stringify({
							"full_name": obj.full_name,
							"email": obj.email,
							"agenda_slug":"Luffy85",
							"address":obj.address,
							"phone":obj.phone
						})
						,
						headers: {
						  "Content-Type": "application/json"
						}
					  }).then(res => res.json())
					  .then(data => {
						setStore({contactos:[...getStore().contactos,data]})
					  })
					},
					editarContact: (obj, id) => {
						console.log("id", id)
						console.log("obj", obj)
						let contactoModificado = {
							id: obj.id,
							full_name: obj.full_name,
							email: obj.email,
							agenda_slug:"Luffy85",
							address: obj.address,
							phone: obj.phone
						}
						store.contactos.map((cadaContacto) => {
							if(cadaContacto.id === contactoModificado.id) {
								fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
							method: "PUT",
							body:JSON.stringify()
							,
							headers: {
							  "Content-Type": "application/json"
							}
						  }).then(res => res.json())
						  .then(data => {
							setStore({contactos:[...getStore().contactos,data]})
						  })
								
							}
						} )
						// store.contactos.id
						
						},
						borrarContact: (obj, id) => {
							fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
								method: "DELETE",
							
								
								headers: {
								  "Content-Type": "application/json"
								}
							
							  }).then((response) => {
								response.status === 200 ? getActions().getContacts() : "";
							  })
							  
							  console.log(id)
							},
		
	

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
			
		}
	};
};

export default getState;
