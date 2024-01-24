//mock data for simple api
const items =[{id: 1, name: 'Item1'},
{id: 2, name: 'Item2'},
{id: 3, name: 'Item3'},
{id: 4, name: 'Item4'},
];

const getItems = (req, res) => {
    res.json(items);
};

// palauta funktio

const getItemById = (req, res) => {
    const itemFound = items.find(item => {
        return item.id === req.params.id;
    });
    const resJson = itemFound ? itemFound : {error: 'not found'};
    if (itemFound) {
        res.json(itemFound);
    }
    else {
        res.status(404).json({error: 'not found'});
    }
    res.json(resJson);
};

const postItem = (req, res) => {
    // TODO: lisää postattu item taulukkoon
    res.json({message: 'item created'});
};

const deleteItem = (req, res) => {
    // TODO: delete item
    res.json({message: 'delete placeholder'});
};

const putItem = (req, res) => {
    // TODO: put item
    res.json({message: 'put placeholder'});
};

export {getItems, getItemById, postItem, deleteItem, putItem};
