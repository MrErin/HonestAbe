//copied from S&P, not finished

const APIManager = require('../api/APIManager')
const buildOrderForm = require('./buildOrderForm')
const $ = require('jquery')

const displayCatalog = function () {
    APIManager.getAllAnimals()
        .then(allAnimals => {
            $('#contentHook').empty()
            allAnimals.forEach(animal => {
                $('#contentHook').append(
                    `
                <section class="card" id="${animal.id}">
                    ${animal.species}
                <button class="btn">Purchase</button>
                </section>
                `
                )
            })
            $('.card').on('click', function (event) {
                console.log(event.currentTarget.id)
                $('#contentHook').empty()
                buildOrderForm(event.currentTarget.id)
            })
        })
}

module.exports = displayCatalog