#!/usr/bin/env node
import {
    ConsoleLog,
    ConvertJavaTextureToBedrockApi,
    Input,
    LocalFileInputEntry,
    LocalFileOutput,
    LocalFolderInputEntry,
    LocalFolderOutput,
    SilentLog
} from "@ozelot379/convert-minecraft-java-texture-to-bedrock-api";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {readFile, stat} from "fs/promises";
import yargs from "yargs";

const {argv, exit} = process;

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
    const PACKAGE = JSON.parse(await readFile(join(__dirname, "..", "package.json"), "utf8"));

    const args = yargs(argv)
        .options({
            i: {
                alias: "input",
                demand: true,
                describe: "Input folder or zip path",
                type: "string"
            },
            o: {
                alias: "output",
                demand: true,
                describe: "Output folder or zip path",
                type: "string"
            },
            l: {
                alias: "log",
                default: true,
                describe: "Log",
                type: "boolean"
            },
            e: {
                alias: "experimental",
                default: false,
                describe: "Experimental conversions",
                type: "boolean"
            }
        })
        .help("help").alias("h", "help")
        .version("version", PACKAGE.version).alias("v", "version")
        .argv;

    try {
        await new ConvertJavaTextureToBedrockApi(
            new Input((await stat(args.input)).isDirectory() ? new LocalFolderInputEntry(args.input) : new LocalFileInputEntry(args.input)),
            (args.output.includes(".") ? new LocalFileOutput(args.output) : new LocalFolderOutput(args.output)),
            (args.log ? new ConsoleLog() : new SilentLog()),
            {
                experimental: args.experimental
            }
        ).convert();
    } catch (err) {
        console.error(err.message);

        exit(1);
    }
})();
