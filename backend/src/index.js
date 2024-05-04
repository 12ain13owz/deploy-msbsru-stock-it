"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const node_http_1 = require("node:http");
const socket_io_1 = require("socket.io");
const health_1 = __importDefault(require("./routes/health"));
const index_1 = __importDefault(require("./routes/v1/index"));
const error_handler_middleware_1 = __importDefault(require("./middlewares/error-handler.middleware"));
const connect_1 = require("./utils/connect");
const logger_1 = __importDefault(require("./utils/logger"));
const socket_1 = __importDefault(require("./socket"));
const corsOptions = {
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};
const node_env = config_1.default.get('node_env');
if (node_env === 'production')
    corsOptions.origin = [
        'https://ms-stock-it.web.app',
        'https://ms-stock-it.fly.dev',
    ];
else
    corsOptions.origin = ['http://localhost:4200'];
const socketOptions = {
    cors: { origin: corsOptions.origin },
};
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
const io = new socket_io_1.Server(server, socketOptions);
const port = config_1.default.get('port');
(0, socket_1.default)(io);
app.use((0, cors_1.default)(corsOptions));
app.use((0, morgan_1.default)('dev'));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/image', express_1.default.static(path_1.default.join(__dirname, '../public/images')));
app.use(health_1.default);
app.use(index_1.default);
app.use(error_handler_middleware_1.default);
if (node_env === 'production') {
    app.get('*.*', express_1.default.static(path_1.default.join(__dirname, '../browser')));
    app.all('*', (req, res) => {
        res.status(200).sendFile('/', { root: 'browser' });
    });
}
server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connect_1.databaseConnect)();
    logger_1.default.info(`Server listening at http://localhost:${port}`);
}));
