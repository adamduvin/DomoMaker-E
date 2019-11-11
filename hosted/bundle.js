"use strict";

var handleGame = function handleGame(e) {
    e.preventDefault();

    /*$("#gameMessage").animate({width:'hide'},350);
      if($("#gameName").val() == '' || $("#gameAge").val() == ''){
        handleError("RAWR! All fields are required");
        return false;
    }
      sendAjax('POST', $("#gameForm").attr("action"), $("#gameForm").serialize(), function(){
        loadGamesFromServer();
    });*/

    return false;
};

/*const GameForm = (props) => {
    return (
        <form id="gameForm"
        onSubmit={handleGame}
        name="gameForm"
        action="/maker"
        method="POST"
        className="gameForm"
        >
            <label htmlFor="name">Name: </label>
            <input id="gameName" type="text" name="name" placeholder="Game Name"/>
            <label htmlFor="age">Age: </label>
            <input id="gameAge" type="text" name="age" placeholder="Game Age"/>
            <label htmlFor="Height">Height: </label>
            <input id="gameHeight" type="text" name="height" placeholder="Game Height"/>
            <input type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeGameSubmit" type="submit" value="Make Game" />
        </form>
    );
};

const GameForm = (props) => {
    return (
        <form id="gameForm"
        onSubmit={handleGame}
        name="gameForm"
        action="/game"
        method="POST"
        className="gameForm"
        >
            <label htmlFor="gameName">Game Name: </label>
            <input id="gameName" type="text" name="gameName" placeholder="Game Name"/>
            <label htmlFor="gamePassword">Game Password: </label>
            <input id="gamePassword" type="text" name="gamePassword" placeholder="Game Password"/>
            <input type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeGameSubmit" type="submit" value="Make Game" />
        </form>
    );
};*/

var PlayerList = function PlayerList(props) {
    if (props.players.length === 0) {
        return React.createElement(
            "div",
            { className: "playerList" },
            React.createElement(
                "h3",
                { className: "emptyPlayerList" },
                "No Players In Game"
            )
        );
    }

    var playerNodes = props.players.map(function (player) {
        return React.createElement(
            "div",
            { key: player._id, className: "player" },
            React.createElement(
                "h3",
                { className: "playerName" },
                " Name: ",
                player.name,
                " "
            ),
            React.createElement(
                "h3",
                { className: "playerCharacterName" },
                " Character: ",
                player.characterName,
                " "
            ),
            React.createElement(
                "h3",
                { className: "playerCharacterLevel" },
                " Level: ",
                player.characterLevel,
                " "
            )
        );
    });

    return React.createElement(
        "div",
        { className: "playerList" },
        playerNodes
    );
};

var addPlayersToGame = function addPlayersToGame() {
    // Have joining players make a POST request to add them to the game

    /*sendAjax('GET', '/getGames', null, (data) => {
        ReactDOM.render(
            <PlayerList games={data.games} />, document.querySelector("#games")
        );
    });*/
};

var setup = function setup(csrf) {
    ReactDOM.render(React.createElement(GameForm, { csrf: csrf }), document.querySelector("#makeGame"));

    ReactDOM.render(React.createElement(GameForm, { csrf: csrf }), document.querySelector("#makeGame"));

    ReactDOM.render(React.createElement(GameList, { games: [] }), document.querySelector("#games"));

    loadGamesFromServer();
};

var getToken = function getToken() {
    sendAjax('GET', '/getToken', null, function (result) {
        setup(result.csrfToken);
    });
};

$(document).ready(function () {
    getToken();
});
"use strict";

var handleDomo = function handleDomo(e) {
    e.preventDefault();

    $("#domoMessage").animate({ width: 'hide' }, 350);

    if ($("#domoName").val() == '' || $("#domoAge").val() == '' || $("#domoAge".val() == '')) {
        handleError("RAWR! All fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm").attr("action"), $("#domoForm").serialize(), function () {
        loadDomosFromServer();
    });

    return false;
};

var handleGame = function handleGame(e) {
    e.preventDefault();

    //$("#domoMessage").animate({width:'hide'},350);

    if ($("#domoName").val() == '' || $("#domoAge").val() == '' || $("#domoAge".val() == '')) {
        handleError("RAWR! All fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm").attr("action"), $("#domoForm").serialize(), function () {
        loadDomosFromServer();
    });

    return false;
};

var DomoForm = function DomoForm(props) {
    return React.createElement(
        "form",
        { id: "domoForm",
            onSubmit: handleDomo,
            name: "domoForm",
            action: "/maker",
            method: "POST",
            className: "domoForm"
        },
        React.createElement(
            "label",
            { htmlFor: "name" },
            "Name: "
        ),
        React.createElement("input", { id: "domoName", type: "text", name: "name", placeholder: "Domo Name" }),
        React.createElement(
            "label",
            { htmlFor: "age" },
            "Age: "
        ),
        React.createElement("input", { id: "domoAge", type: "text", name: "age", placeholder: "Domo Age" }),
        React.createElement(
            "label",
            { htmlFor: "Height" },
            "Height: "
        ),
        React.createElement("input", { id: "domoHeight", type: "text", name: "height", placeholder: "Domo Height" }),
        React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
        React.createElement("input", { className: "makeDomoSubmit", type: "submit", value: "Make Domo" })
    );
};

var GameForm = function GameForm(props) {
    return React.createElement(
        "form",
        { id: "gameForm",
            onSubmit: handleGame,
            name: "gameForm",
            action: "/game",
            method: "POST",
            className: "gameForm"
        },
        React.createElement(
            "label",
            { htmlFor: "gameName" },
            "Game Name: "
        ),
        React.createElement("input", { id: "gameName", type: "text", name: "gameName", placeholder: "Game Name" }),
        React.createElement(
            "label",
            { htmlFor: "gamePassword" },
            "Game Password: "
        ),
        React.createElement("input", { id: "gamePassword", type: "text", name: "gamePassword", placeholder: "Game Password" }),
        React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
        React.createElement("input", { className: "makeGameSubmit", type: "submit", value: "Make Game" })
    );
};

var DomoList = function DomoList(props) {
    if (props.domos.length === 0) {
        return React.createElement(
            "div",
            { className: "domoList" },
            React.createElement(
                "h3",
                { className: "emptyDomo" },
                "No Domos yet"
            )
        );
    }

    var domoNodes = props.domos.map(function (domo) {
        return React.createElement(
            "div",
            { key: domo._id, className: "domo" },
            React.createElement("img", { src: "/assets/img/domoface.jpeg", alt: "domo face", className: "domoFace" }),
            React.createElement(
                "h3",
                { className: "domoName" },
                " Name: ",
                domo.name,
                " "
            ),
            React.createElement(
                "h3",
                { className: "domoAge" },
                " Age: ",
                domo.age,
                " "
            ),
            React.createElement(
                "h3",
                { className: "domoHeight" },
                " Height: ",
                domo.height,
                " "
            )
        );
    });

    return React.createElement(
        "div",
        { className: "domoList" },
        domoNodes
    );
};

var loadDomosFromServer = function loadDomosFromServer() {
    sendAjax('GET', '/getDomos', null, function (data) {
        ReactDOM.render(React.createElement(DomoList, { domos: data.domos }), document.querySelector("#domos"));
    });
};

var setup = function setup(csrf) {
    ReactDOM.render(React.createElement(DomoForm, { csrf: csrf }), document.querySelector("#makeDomo"));

    ReactDOM.render(React.createElement(GameForm, { csrf: csrf }), document.querySelector("#makeGame"));

    ReactDOM.render(React.createElement(DomoList, { domos: [] }), document.querySelector("#domos"));

    loadDomosFromServer();
};

var getToken = function getToken() {
    sendAjax('GET', '/getToken', null, function (result) {
        setup(result.csrfToken);
    });
};

$(document).ready(function () {
    getToken();
});
"use strict";

var handleError = function handleError(message) {
    $("#errorMessage").text(message);
    $("#domoMessage").animate({ width: 'toggle' }, 350);
};

var redirect = function redirect(response) {
    $("#domoMessage").animate({ width: 'hide' }, 350);
    window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
    $.ajax({
        cache: false,
        type: type,
        url: action,
        data: data,
        dataType: "json",
        success: success,
        error: function error(xhr, status, _error) {
            var messageObj = JSON.parse(xhr.responseText);
            handleError(messageObj.error);
        }
    });
};
