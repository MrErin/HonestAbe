# Honest Abe API
## Requirements:

Create an API using json-server for the resources you created above to track campaign contributions.

## Currently Working On:



## Remaining Features:

1. Create a db.json file containing all of the resources.
1. Define a few entries for each resource. Each resource must have a unique primary key.
1. Establish relationships between the resources by storing primary key values as foreign keys on related objects.
1. Run your API with the following command.
```
json-server --watch db.json
```
1. Use jQuery's $.ajax() method to get all of the related data to build a card for each politician. It should list the bills they have sponsored, and any companies that have contributed to a PAC that has a shared interest for each bill.


## Stretch Goals:



## Completed Features:



## Data Structure:

* Entity Relationship Diagram in Excel file
* HTML structure below

```
<article class="politician">
    <header class="politician__name">
        <h1>Abby Fleming</h1>
    </header>
    <section class="politician__bills">
        <h3>Sponsored Bills</h3>
        <div>
            <h4>S. 2325: Northern Mariana Islands U.S. Workforce Act</h4>
            <ul>
                <li>Employment</li>
                <li>Energy</li>
                <li>Natural Resources</li>
            </ul>
        </div>
    </section>
    <section class="politician__influencers">
        <h3>Related PACs</h3>
        <ul>
            <li>American Gas Association</li>
            <li>League of Conservation Voters Action Fund</li>
        </ul>
    </section>
</article>
```