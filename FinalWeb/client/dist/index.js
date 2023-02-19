/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/TiledImage.js":
/*!**********************************!*\
  !*** ./client/src/TiledImage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TiledImage\": () => (/* binding */ TiledImage)\n/* harmony export */ });\nclass TiledImage {\r\n\tconstructor (imagePath, columns, rows, refreshInterval, horizontal, scale, nodeOrId) {\r\n\t\tif (nodeOrId != null) {\r\n\t\t\tthis.node = nodeOrId;\r\n\r\n\t\t\tif (typeof nodeOrId == \"string\") {\r\n\t\t\t\tthis.node = document.getElementById(nodeOrId);\r\n\t\t\t}\r\n\r\n\t\t\tthis.node.style.position = \"absolute\";\r\n\t\t}\r\n\r\n\t\tthis.imageList = new Array();\r\n\t\tthis.tickTime = 0;\r\n\t\tthis.tickDrawFrameInterval = 0;\r\n\t\tthis.tickRefreshInterval = 100;\r\n\t\tthis.horizontal = true;\r\n\t\tthis.scale = 1.0;\r\n\t\tthis.flipped = false;\r\n\t\tthis.looped = true;\r\n\r\n\t\tif (scale !== undefined) {\r\n\t\t\tthis.scale = scale;\r\n\t\t}\r\n\r\n\t\tif (horizontal !== undefined) {\r\n\t\t\tthis.horizontal = horizontal;\r\n\t\t}\r\n\r\n\t\tif (refreshInterval !== undefined) {\r\n\t\t\tthis.tickRefreshInterval = refreshInterval;\r\n\t\t}\r\n\r\n\t\tlet image = new Image();\r\n\t\timage.src = imagePath;\r\n\t\tthis.imageList.push(image);\r\n\t\tthis.imageTileColCount = columns;\r\n\t\tthis.imageTileRowCount = rows;\r\n\t\tthis.imageCurrentCol = 0;\r\n\t\tthis.imageCurrentRow = 0;\r\n\t\tthis.imageAnimationMin = 0;\r\n\t\tthis.imageAnimationMax = columns;\r\n\t\tthis.angle = 0;\r\n\t\tthis.opacity = 1;\r\n\t\tthis.fullImageIdx = 0;\r\n\t\tthis.fullImageCount = null;\r\n\t\tthis.fullImageCallback = null;\r\n\t\tthis.stopped = true;\r\n\t}\r\n\r\n\tsetFullImageLoop (count, fullImageCallback = null) {\r\n\t\tthis.fullImageCallback = fullImageCallback;\r\n\t\tthis.imageCurrentCol = 0;\r\n\t\tthis.imageCurrentRow = 0;\r\n\t\tthis.fullImageIdx = 0;\r\n\t\tthis.fullImageCount = count;\r\n\t\tthis.stopped = false;\r\n\t}\r\n\r\n\tsetFlipped(flipped) {\r\n\t\tthis.flipped = flipped;\r\n\t}\r\n\r\n\tsetOpacity (opacity) {\r\n\t\tif (opacity > 1) opacity = 1;\r\n\t\tif (opacity < 0) opacity = 0;\r\n\r\n\t\tthis.opacity = opacity;\r\n\t}\r\n\r\n\r\n\tsetLooped (looped) {\r\n\t\tthis.looped = looped;\r\n\t}\r\n\r\n\taddImage (imagePath) {\r\n\t\tlet image = new Image();\r\n\t\timage.src = imagePath;\r\n\t\tthis.imageList.push(image);\r\n\t}\r\n\r\n\t// starts at 0\r\n\tchangeRow (row) {\r\n\t\tthis.imageCurrentRow = row;\r\n\t\tthis.stopped = false;\r\n\r\n\t\tif (!this.horizontal) {\r\n\t\t\tthis.imageAnimationMin = row;\r\n\t\t\tthis.imageAnimationMax = row;\r\n\t\t}\r\n\t}\r\n\r\n\t// starts at 0\r\n\tchangeCol (col) {\r\n\t\tthis.imageCurrentCol = col;\r\n\t\tthis.stopped = false;\r\n\r\n\t\tif (this.horizontal) {\r\n\t\t\tthis.imageAnimationMin = col;\r\n\t\t\tthis.imageAnimationMax = col;\r\n\t\t}\r\n\t}\r\n\r\n\t// starts at 0\r\n\tchangeMinMaxInterval (min, max, doneEvent = null) {\r\n\t\tmax += 1;\r\n\t\tthis.stopped = false;\r\n\r\n\t\tif (this.imageTileColCount < max) {\r\n\t\t\tmax = this.imageTileColCount;\r\n\t\t}\r\n\r\n\t\tthis.imageAnimationMin = min;\r\n\t\tthis.imageAnimationMax = max;\r\n\r\n\t\tif (this.horizontal) {\r\n\t\t\tthis.imageCurrentCol = this.imageAnimationMin;\r\n\t\t}\r\n\t\telse {\r\n\t\t\tthis.imageCurrentRow = this.imageAnimationMin;\r\n\t\t}\r\n\r\n\t\tthis.doneEvent = doneEvent;\r\n\t}\r\n\r\n\tresetCol() {\r\n\t\tthis.imageCurrentCol = this.imageAnimationColMin;\r\n\t\tthis.stopped = false;\r\n\t}\r\n\r\n\tsetRotationAngle (angle) {\r\n\t\tthis.angle = angle;\r\n\t}\r\n\r\n\tgetActualWidth () {\r\n\t\treturn this.imageList[0].width/this.imageTileColCount * this.scale;\r\n\t}\r\n\r\n\tgetActualHeight () {\r\n\t\treturn this.imageList[0].height/this.imageTileRowCount * this.scale;\r\n\t}\r\n\r\n\tsetPaused (paused) {\r\n\t\tthis.stopped = paused;\r\n\t}\r\n\r\n\ttick (spritePosX, spritePosY, ctx) {\r\n\t\tif (ctx == null) {\r\n\t\t\tif (this.imageList[0].complete) {\r\n\t\t\t\tlet canvas = this.node.querySelector(\"canvas\");\r\n\t\t\t\tlet w = this.getActualWidth();\r\n\t\t\t\tlet h = this.getActualHeight();\r\n\r\n\t\t\t\tif (canvas == null) {\r\n\t\t\t\t\tthis.node.innerHTML = \"<canvas width='\" + w + \"' height='\" + h + \"'></canvas>\";\r\n\t\t\t\t\tcanvas = this.node.querySelector(\"canvas\");\r\n\t\t\t\t}\r\n\r\n\t\t\t\tthis.node.style.left = spritePosX + \"px\";\r\n\t\t\t\tthis.node.style.top = spritePosY + \"px\";\r\n\r\n\t\t\t\tspritePosX = w/2;\r\n\t\t\t\tspritePosY = h/2;\r\n\r\n\t\t\t\tctx = canvas.getContext(\"2d\");\r\n\t\t\t\tctx.clearRect(0, 0, w, h);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet now = new Date().getTime();\r\n\t\tlet delta = now - (this.tickTime || now);\r\n\t\tthis.tickTime = now;\r\n\t\tthis.tickDrawFrameInterval += delta;\r\n\r\n\t\tif (this.tickDrawFrameInterval > this.tickRefreshInterval && !this.stopped) {\r\n\t\t\tthis.tickDrawFrameInterval = 0;\r\n\t\t}\r\n\r\n\t\tlet actualW = this.getActualWidth();\r\n\t\tlet actualH = this.getActualHeight();\r\n\r\n\t\tfor (let i = 0; i < this.imageList.length;i++) {\r\n\t\t\tif (this.imageList[i].complete && ctx != null) {\r\n\t\t\t\tlet x = Math.floor(spritePosX - actualW/2);\r\n\t\t\t\tlet y = Math.floor(spritePosY - actualH/2);\r\n\r\n\t\t\t\tif (this.flipped || this.angle != 0 || this.opacity != 1) {\r\n\t\t\t\t\tctx.save();\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (this.flipped) {\r\n\t\t\t\t\tctx.translate(Math.floor(spritePosX - actualW/2) + actualW,\r\n\t\t\t\t\t\t\t\tMath.floor(spritePosY - actualH/2));\r\n\t\t\t\t\tctx.scale(-1, 1);\r\n\t\t\t\t\tx = 0;\r\n\t\t\t\t\ty = 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (this.angle != 0) {\r\n\t\t\t\t\tctx.translate(Math.floor(spritePosX),\r\n\t\t\t\t\t\t\t\tMath.floor(spritePosY));\r\n\t\t\t\t\tctx.rotate((this.flipped ? -1 : 1) * this.angle * Math.PI/ 180);\r\n\r\n\t\t\t\t\tx = -actualW/2;\r\n\t\t\t\t\ty = -actualH/2;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (this.opacity != 1) ctx.globalAlpha   = this.opacity;\r\n\r\n\t\t\t\tctx.drawImage(this.imageList[i],\r\n\t\t\t\t\t\t\tthis.imageList[i].width/this.imageTileColCount * this.imageCurrentCol,\r\n\t\t\t\t\t\t\tthis.imageList[i].height/this.imageTileRowCount * this.imageCurrentRow,\r\n\t\t\t\t\t\t\tthis.imageList[i].width/this.imageTileColCount,\r\n\t\t\t\t\t\t\tthis.imageList[i].height/this.imageTileRowCount,\r\n\t\t\t\t\t\t\tx,\r\n\t\t\t\t\t\t\ty,\r\n\t\t\t\t\t\t\tactualW,\r\n\t\t\t\t\t\t\tactualH);\r\n\r\n\t\t\t\tif (this.flipped || this.angle != 0 || this.opacity != 1) {\r\n\t\t\t\t\tctx.restore();\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (this.tickDrawFrameInterval == 0) {\r\n\t\t\tif (this.horizontal) {\r\n\t\t\t\tif (this.fullImageCount != null) {\r\n\t\t\t\t\tthis.fullImageIdx += 1;\r\n\r\n\t\t\t\t\tif (this.fullImageIdx == this.fullImageCount) {\r\n\t\t\t\t\t\tthis.fullImageIdx = 0;\r\n\t\t\t\t\t\tthis.imageCurrentCol = -1;\r\n\t\t\t\t\t\tthis.imageCurrentRow = 0;\r\n\r\n\t\t\t\t\t\tif (this.fullImageCallback != null) {\r\n\t\t\t\t\t\t\tthis.fullImageCallback();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tif (this.imageCurrentCol + 1 >= this.imageTileColCount) {\r\n\t\t\t\t\t\t\tthis.imageCurrentCol = -1;\r\n\t\t\t\t\t\t\tthis.imageCurrentRow++;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif ((this.fullImageCount == null && this.imageCurrentCol + 1 >= this.imageAnimationMax) ||\r\n\t\t\t\t\t(this.fullImageCount != null && this.imageCurrentCol + 1 >= this.imageTileColCount)) {\r\n\t\t\t\t\tif (this.doneEvent != null) {\r\n\t\t\t\t\t\tlet doneEvent = this.doneEvent;\r\n\t\t\t\t\t\tthis.doneEvent = null;\r\n\t\t\t\t\t\tdoneEvent();\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse if (this.looped) {\r\n\t\t\t\t\t\tthis.imageCurrentCol = this.imageAnimationMin;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\telse {\r\n\t\t\t\t\tthis.imageCurrentCol++;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\tif (this.fullImageCount != null) {\r\n\t\t\t\t\tthis.fullImageIdx += 1;\r\n\r\n\t\t\t\t\tif (this.fullImageIdx == this.fullImageCount) {\r\n\t\t\t\t\t\tthis.fullImageIdx = 0;\r\n\t\t\t\t\t\tthis.imageCurrentCol = 0;\r\n\t\t\t\t\t\tthis.imageCurrentRow = -1;\r\n\r\n\t\t\t\t\t\tif (this.fullImageCallback != null) {\r\n\t\t\t\t\t\t\tthis.fullImageCallback();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tif (this.imageCurrentRow + 1 >= this.imageTileRowCount) {\r\n\t\t\t\t\t\t\tthis.imageCurrentRow = -1;\r\n\t\t\t\t\t\t\tthis.imageCurrentCol++;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif ((this.fullImageCount == null && this.imageCurrentRow + 1 >= this.imageAnimationMax) ||\r\n\t\t\t\t\t(this.fullImageCount != null && this.imageCurrentRow + 1 >= this.imageTileRowCount)){\r\n\t\t\t\t\tif (this.doneEvent != null) {\r\n\t\t\t\t\t\tlet doneEvent = this.doneEvent;\r\n\t\t\t\t\t\tthis.doneEvent = null;\r\n\t\t\t\t\t\tdoneEvent();\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse if (this.looped) {\r\n\t\t\t\t\t\tthis.imageCurrentRow = this.imageAnimationMin;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\telse {\r\n\t\t\t\t\tthis.imageCurrentRow++;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://sirius/./client/src/TiledImage.js?");

/***/ }),

/***/ "./client/src/page-index.js":
/*!**********************************!*\
  !*** ./client/src/page-index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sirius_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sirius-api */ \"./client/src/sirius-api.js\");\n/* harmony import */ var _sprite_Rayman_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite/Rayman.js */ \"./client/src/sprite/Rayman.js\");\n\r\n\r\n\r\nlet ray;\r\nlet log;\r\nlet op = 0;\r\nlet logo;\r\nlet title;\r\nlet size = 10;\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    logo = document.createElement(\"div\");\r\n    logo.id = \"titre\";\r\n    logo.style.position = \"absolute\";\r\n    logo.style.left = 50 + \"vw\";\r\n    logo.style.top = 25 + \"vh\";\r\n    logo.style.opacity = 0;\r\n    document.querySelector(\"#game\").append(logo);\r\n    title = document.querySelector(\"#titre\");\r\n    title.innerHTML = '<img src=\"img/logo.png\" />';\r\n    document.querySelector(\"img\").style.width = 100 + \"%\";\r\n    ray = new _sprite_Rayman_js__WEBPACK_IMPORTED_MODULE_1__.Rayman(47, false);\r\n    log = document.querySelector(\"#container_form\");\r\n    document.querySelector(\"form\").onsubmit = function () {\r\n        return (0,_sirius_api__WEBPACK_IMPORTED_MODULE_0__.signin)(this);\r\n    }\r\n    setTimeout(login,900);\r\n    setTimeout(grow, 1000);\r\n    tick();\r\n});\r\n\r\nconst login = () => {\r\n    if (op < 1){\r\n        op += 0.1;\r\n        log.style.opacity = op;\r\n        setTimeout(login, 50);\r\n    } \r\n    \r\n}\r\n\r\nconst grow = () => {\r\n    logo.style.opacity = 1;\r\n    if (size < 500) {\r\n        size += 20\r\n        logo.style.height = size / 2 + \"px\";\r\n        logo.style.width = size + \"px\";\r\n        logo.style.transform = \"translate(-50%, -20%)\";\r\n        setTimeout(grow, 50);    \r\n    }\r\n}\r\n\r\nconst tick = () => {\r\n    ray.tick();\r\n    window.requestAnimationFrame(tick);\r\n}\n\n//# sourceURL=webpack://sirius/./client/src/page-index.js?");

/***/ }),

/***/ "./client/src/sirius-api.js":
/*!**********************************!*\
  !*** ./client/src/sirius-api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attack\": () => (/* binding */ attack),\n/* harmony export */   \"gameListLoop\": () => (/* binding */ gameListLoop),\n/* harmony export */   \"gameLoop\": () => (/* binding */ gameLoop),\n/* harmony export */   \"joinSiriusGame\": () => (/* binding */ joinSiriusGame),\n/* harmony export */   \"registerGameCallbacks\": () => (/* binding */ registerGameCallbacks),\n/* harmony export */   \"registerLobbyCallbacks\": () => (/* binding */ registerLobbyCallbacks),\n/* harmony export */   \"signin\": () => (/* binding */ signin),\n/* harmony export */   \"signout\": () => (/* binding */ signout)\n/* harmony export */ });\nlet listCallback = null;\r\nlet attackCallback = null;\r\nlet gameCallback = null;\r\nlet gameOverCallback = null;\r\nlet atkNode1 = null;\r\nlet atkNode2 = null;\r\nlet atkNode3 = null;\r\nlet gameInitialised = false;\r\nlet gamePlayer = null;\r\nlet lastAction = null;\r\n\r\nconst BASE_API_URL = \"https://apps-de-cours.com/web-sirius/server/api\";\r\n\r\nconst findGetParameter = parameterName => {\r\n    var result = null,\r\n        tmp = [];\r\n    location.search\r\n        .substr(1)\r\n        .split(\"&\")\r\n        .forEach(function (item) {\r\n          tmp = item.split(\"=\");\r\n          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);\r\n        });\r\n    return result;\r\n}\r\n\r\nlet k = findGetParameter(\"k\");\r\n\r\nif (k != null) {\r\n    localStorage[\"sirius_key\"] = k;\r\n    localStorage[\"username\"] = findGetParameter(\"u\");\r\n    window.location.href = \"lobby.html\";\r\n}\r\n\r\nconst signin = formNode => {\r\n    localStorage[\"username\"] = formNode.username.value;\r\n\r\n    let formData = new FormData();\r\n    formData.append('username', formNode.username.value);\r\n    formData.append('pwd', formNode.password.value);\r\n\r\n    fetch(BASE_API_URL + \"/signin\", {\r\n        method: \"POST\",\r\n        body: formData,\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        if (data.length == 40) {\r\n            localStorage[\"sirius_key\"] = data;\r\n            window.location.href = \"lobby.html?k=\" + localStorage[\"sirius_key\"] + \"&u=\" + localStorage[\"username\"];\r\n        }\r\n        else {\r\n            document.querySelector(\"#api-message\").innerText = data;\r\n        }\r\n    });\r\n\r\n    return false;\r\n}\r\n\r\nconst signout = () => {\r\n    let formData = new FormData();\r\n    formData.append('key', localStorage[\"sirius_key\"]);\r\n\r\n    fetch(BASE_API_URL + \"/signout\", {\r\n        method: \"POST\",\r\n        body: formData\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        localStorage.removeItem(\"sirius_key\");\r\n        window.location.href = \"index.html\";\r\n    });\r\n\r\n    return false;\r\n}\r\n\r\nconst gameListLoop = () => {\r\n    let formData = new FormData();\r\n    formData.append('key', localStorage[\"sirius_key\"]);\r\n\r\n    setTimeout(() => {\r\n        fetch(BASE_API_URL + \"/list\", {\r\n            method: \"POST\",\r\n            body: formData\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (data instanceof Array) {\r\n                listCallback(data);\r\n                setTimeout(gameListLoop, 4000);\r\n            }\r\n            else {\r\n                localStorage.removeItem(\"key\");\r\n                window.location.href = \"index.html\";\r\n            }\r\n        });\r\n    },  2000);\r\n}\r\n\r\nconst joinSiriusGame = (id, errorCallback) => {\r\n    let formData = new FormData();\r\n    formData.append('key', localStorage[\"sirius_key\"]);\r\n    formData.append('id', id);\r\n\r\n    fetch(BASE_API_URL + \"/enter\", {\r\n        method: \"POST\",\r\n        body: formData\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        if (data == \"GAME_ENTERED\") {\r\n            window.location.href=\"game.html\";\r\n        }\r\n        else {\r\n            errorCallback();\r\n        }\r\n    });\r\n}\r\n\r\nconst gameLoop = () => {\r\n    let formData = new FormData();\r\n    formData.append('key', localStorage[\"sirius_key\"]);\r\n\r\n    setTimeout(() => {\r\n        fetch(BASE_API_URL + \"/state\", {\r\n            method: \"POST\",\r\n            body: formData\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (typeof data !== \"object\") {\r\n                gameOverCallback(data);\r\n            }\r\n            else {\r\n                gamePlayer = data.player;\r\n\r\n                data.player.skills.forEach(s => {\r\n                    let n = null;\r\n                    if (s.name == \"Normal\") n = atkNode1;\r\n                    else if (s.name == \"Special1\") n = atkNode2;\r\n                    else if (s.name == \"Special2\") n = atkNode3;\r\n\r\n                    if (!gameInitialised) {\r\n                        n.style.opacity = 1;\r\n                        n.setAttribute(\"data-max-opacity\", 1);\r\n\r\n                        n.onclick = () => {\r\n                            attack(s);\r\n                        }\r\n                    }\r\n                    else if (gamePlayer.mp < s.cost) {\r\n                        n.style.opacity = 0.5;\r\n                        n.setAttribute(\"data-max-opacity\", 0.5);\r\n                        n.onclick = () => {};\r\n                    }\r\n                })\r\n\r\n                gameInitialised = true;\r\n                gameCallback(data.game, data.player, data.other_players);\r\n                setTimeout(gameLoop, 2000);\r\n            }\r\n        });\r\n    },  2000);\r\n}\r\n\r\nconst changeBtnsOpacity = opacity => {\r\n    atkNode1.style.opacity = atkNode1.getAttribute(\"data-max-opacity\") < opacity ? atkNode1.getAttribute(\"data-max-opacity\") : opacity;\r\n    atkNode2.style.opacity = atkNode2.getAttribute(\"data-max-opacity\") < opacity ? atkNode2.getAttribute(\"data-max-opacity\") : opacity;\r\n    atkNode3.style.opacity = atkNode3.getAttribute(\"data-max-opacity\") < opacity ? atkNode3.getAttribute(\"data-max-opacity\") : opacity;\r\n}\r\n\r\nconst attack = (skill) => {\r\n    if (gamePlayer.hp > 0 && skill.cost <= gamePlayer.mp &&\r\n        (lastAction == null || lastAction + 2000 < new Date().getTime())) {\r\n        lastAction = new Date().getTime() + 10000;\r\n\r\n        changeBtnsOpacity(0.5);\r\n        attackCallback(skill);\r\n\r\n        let formData = new FormData();\r\n        formData.append('key', localStorage[\"sirius_key\"]);\r\n        formData.append('skill-name', skill.name);\r\n\r\n        fetch(BASE_API_URL + \"/action\", {\r\n            method: \"POST\",\r\n            body: formData\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            lastAction = new Date().getTime();\r\n\r\n            setTimeout(() => {\r\n                changeBtnsOpacity(1);\r\n            }, 2000);\r\n        });\r\n    }\r\n}\r\n\r\nconst registerLobbyCallbacks = (listCb, heroInfoCb) => {\r\n    listCallback = listCb;\r\n\r\n    setTimeout(() => {\r\n        let formData = new FormData();\r\n        formData.append('key', localStorage[\"sirius_key\"]);\r\n\r\n        fetch(BASE_API_URL + \"/user-info\", {\r\n            method: \"POST\",\r\n            body: formData\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            heroInfoCb(data);\r\n        });\r\n    }, 2000);\r\n}\r\n\r\nconst registerGameCallbacks = (gameCb, gameOverCb, attackCb, attackNode1, attackNode2, attackNode3) => {\r\n    attackCallback = attackCb;\r\n    gameCallback = gameCb;\r\n    gameOverCallback = gameOverCb;\r\n    atkNode1 = attackNode1;\r\n    atkNode2 = attackNode2;\r\n    atkNode3 = attackNode3;\r\n\r\n    atkNode1.setAttribute(\"data-max-opacity\", 0.5);\r\n    atkNode2.setAttribute(\"data-max-opacity\", 0.5);\r\n    atkNode3.setAttribute(\"data-max-opacity\", 0.5);\r\n    changeBtnsOpacity(0.5);\r\n}\n\n//# sourceURL=webpack://sirius/./client/src/sirius-api.js?");

/***/ }),

/***/ "./client/src/sprite/Rayman.js":
/*!*************************************!*\
  !*** ./client/src/sprite/Rayman.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rayman\": () => (/* binding */ Rayman)\n/* harmony export */ });\n/* harmony import */ var _TiledImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TiledImage.js */ \"./client/src/TiledImage.js\");\n/* harmony import */ var _deplacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deplacement.js */ \"./client/src/sprite/deplacement.js\");\n\r\n\r\n\r\nclass Rayman {\r\n\tconstructor(pos, game) {\r\n\t\tlet columnCount = 16;\r\n\t\tlet rowCount = 1;\r\n\t\tlet refreshDelay = 33;\r\n\t\tlet loopColumns = true;\r\n\t\tlet scale = 1.;\r\n\t\tthis.game = game;\r\n\r\n\t\tthis.falling = false;\r\n\t\tthis.attaque3 = false;\r\n\r\n\t\tthis.node = document.createElement(\"div\");\r\n\t\tthis.node.style.bottom = 20 + \"vh\";\r\n\t\tthis.node.style.left = pos + \"%\";\r\n\t\tdocument.querySelector(\"#game\").append(this.node);\r\n\r\n\t\tthis.walk = new _TiledImage_js__WEBPACK_IMPORTED_MODULE_0__.TiledImage(\"/client/img/spritesheet/walk.png\", columnCount, rowCount, refreshDelay, loopColumns, scale, this.node);\r\n\t\tthis.walk.changeRow(0);\r\n\t\tthis.walk.changeMinMaxInterval(0, 15);\r\n\r\n\t\tthis.hit = new _TiledImage_js__WEBPACK_IMPORTED_MODULE_0__.TiledImage(\"/client/img/spritesheet/hitt.png\", 5, 3, refreshDelay, loopColumns, scale, this.node);\r\n\t\tthis.hit.changeRow(0);\r\n\t\tthis.hit.changeMinMaxInterval(0, 5);\r\n\r\n\t\tthis.static = new _TiledImage_js__WEBPACK_IMPORTED_MODULE_0__.TiledImage(\"/client/img/spritesheet/static.png\", 12, 1, refreshDelay, loopColumns, scale, this.node);\r\n\t\tthis.static.changeRow(0);\r\n\t\tthis.static.changeMinMaxInterval(0, 11);\r\n\r\n\t\tthis.jump = new _TiledImage_js__WEBPACK_IMPORTED_MODULE_0__.TiledImage(\"/client/img/spritesheet/jump.png\", 4, 1, 60, loopColumns, scale, this.node);\r\n\t\tthis.jump.changeRow(0);\r\n\t\tthis.jump.changeMinMaxInterval(0, 3);\r\n\r\n\t\tthis.lay = new _TiledImage_js__WEBPACK_IMPORTED_MODULE_0__.TiledImage(\"/client/img/spritesheet/lay.png\", 7, 1, 60, loopColumns, scale, this.node);\r\n\t\tthis.lay.changeRow(0);\r\n\t\tthis.lay.changeMinMaxInterval(0, 6);\r\n\r\n\t\tthis.fall = new _TiledImage_js__WEBPACK_IMPORTED_MODULE_0__.TiledImage(\"/client/img/spritesheet/fall.png\", 7, 1, 60, loopColumns, scale, this.node);\r\n\t\tthis.fall.changeRow(0);\r\n\t\tthis.fall.changeMinMaxInterval(0, 6);\r\n\r\n\t\tthis.ground = this.node.offsetTop - 100;\r\n\t\tthis.x = this.node.offsetLeft;\r\n\t\tthis.y = this.node.offsetTop - 100;\r\n\t\tthis.punchX = this.x + 50;\r\n\t}\r\n\r\n\tgetX() { return this.x}\r\n\tgetY() { return this.y}\r\n\r\n\tremove() {\r\n\t\tthis.node.remove();\r\n\t}\r\n\r\n\r\n\ttick () {\r\n\t\tif (this.game) {\r\n\t\t\tthis.walk.tick();\r\n\t\t} else {\r\n\t\t\tif (this.falling) {\r\n\t\t\t\tif (this.right) this.fall.setFlipped(false);\r\n\t\t\t\telse if (this.left) this.fall.setFlipped(true);\t\t\t\r\n\t\t\t\tif (this.y <= this.ground) {\r\n\t\t\t\t\tthis.y += 2;\r\n\t\t\t\t}\r\n\t\t\t\tif (this.y == this.ground) this.falling = false;\t\t\r\n\t\t\t}\r\n\t\r\n\t\t\tif (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.leftArrowOn) {\r\n\t\t\t\tthis.right = false;\r\n\t\t\t\tthis.left = true;\r\n\t\t\t\tthis.walk.changeRow(0);\r\n\t\t\t\tthis.walk.setFlipped(true);\r\n\t\t\t\tthis.x -= 1.5;\r\n\t\t\t\tthis.punchX -= 1.5;\r\n\t\t\t}\r\n\t\r\n\t\t\tif (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.rightArrowOn) {\r\n\t\t\t\tthis.left = false;\r\n\t\t\t\tthis.right = true;\r\n\t\t\t\tthis.walk.changeRow(0);\r\n\t\t\t\tthis.walk.setFlipped(false);\r\n\t\t\t\tthis.x += 1.5;\r\n\t\t\t\tthis.punchX += 1.5;\r\n\t\t\t}\r\n\t\r\n\t\t\tif (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.space) {\r\n\t\t\t\tthis.hit.changeRow(1)\r\n\t\t\t\tif (this.right) this.hit.setFlipped(false);\r\n\t\t\t\telse if (this.left) this.hit.setFlipped(true);\r\n\t\t\t}\r\n\t\r\n\t\t\tif (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.upArrow) {\r\n\t\t\t\tif (this.right) this.jump.setFlipped(false);\r\n\t\t\t\telse if (this.left) this.jump.setFlipped(true);\r\n\t\t\t\tthis.falling = false;\r\n\t\t\t\tthis.y--;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tif (!_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.upArrow) { this.falling = true;}\r\n\t\r\n\t\t\tif (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.downArrow) {\r\n\t\t\t\tif (this.right) this.lay.setFlipped(false);\r\n\t\t\t\telse if (this.left) this.lay.setFlipped(true);\r\n\t\t\t}\r\n\t\t\r\n\t\t\tif (this.falling && this.y < this.ground) {\r\n\t\t\t\tthis.fall.tick(this.x, this.y);\r\n\t\t\t} else if (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.upArrow) {\r\n\t\t\t\tthis.jump.tick(this.x, this.y);\t\r\n\t\t\t\tif (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.rightArrowOn) this.jump.tick(this.x, this.y);\r\n\t\t\t\tif (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.leftArrowOn) this.jump.tick(this.x, this.y);\t\t\t\r\n\t\t\t} else if (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.leftArrowOn || _deplacement_js__WEBPACK_IMPORTED_MODULE_1__.rightArrowOn) {\r\n\t\t\t\tthis.walk.tick(this.x, this.y);\r\n\t\t\t} else if (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.space) {\r\n\t\t\t\tthis.hit.tick(this.x, this.y);\r\n\t\t\t} else if (_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.downArrow) {\r\n\t\t\t\tthis.lay.tick(this.x, this.y);\r\n\t\t\t} else if (!_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.leftArrowOn && !_deplacement_js__WEBPACK_IMPORTED_MODULE_1__.rightArrowOn) {\r\n\t\t\t\tif (this.right) this.static.setFlipped(false);\r\n\t\t\t\telse if (this.left) this.static.setFlipped(true);\r\n\t\t\t\tthis.static.tick();\r\n\t\t\t} \r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://sirius/./client/src/sprite/Rayman.js?");

/***/ }),

/***/ "./client/src/sprite/deplacement.js":
/*!******************************************!*\
  !*** ./client/src/sprite/deplacement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"downArrow\": () => (/* binding */ downArrow),\n/* harmony export */   \"falling\": () => (/* binding */ falling),\n/* harmony export */   \"leftArrowOn\": () => (/* binding */ leftArrowOn),\n/* harmony export */   \"rightArrowOn\": () => (/* binding */ rightArrowOn),\n/* harmony export */   \"space\": () => (/* binding */ space),\n/* harmony export */   \"upArrow\": () => (/* binding */ upArrow)\n/* harmony export */ });\nlet leftArrowOn = false;\r\nlet rightArrowOn = false;\r\nlet upArrow = false;\r\nlet downArrow = false;\r\nlet space = false;\r\nlet falling = false;\r\n\r\ndocument.addEventListener(\"keydown\", e => {\r\n\tif (e.key == \"ArrowLeft\") leftArrowOn = true;\r\n\telse if (e.key == \"ArrowRight\") rightArrowOn = true;\r\n\telse if (e.key == \"ArrowUp\") upArrow = true;\r\n\telse if (e.key == \"ArrowDown\") downArrow = true;\r\n\telse if (e.key == \" \") space = true;\r\n});\r\n\r\ndocument.addEventListener(\"keyup\", e => {\r\n\tif (e.key == \"ArrowLeft\") leftArrowOn = false;\r\n\telse if (e.key == \"ArrowRight\") rightArrowOn = false;\r\n\telse if (e.key == \"ArrowUp\") {\r\n\t\tupArrow = false;\r\n\t\tfalling = true;\r\n\t} else if (e.key == \"ArrowDown\") downArrow = false;\r\n\telse if (e.key == \" \") space = false;\r\n});\n\n//# sourceURL=webpack://sirius/./client/src/sprite/deplacement.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/page-index.js");
/******/ 	
/******/ })()
;