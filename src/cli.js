import {
    ConsoleLog,
    ConvertJavaTextureToBedrock,
    Input,
    LocalFileInputEntry,
    LocalFileOutput,
    LocalFolderInputEntry,
    LocalFolderOutput,
    SilentLog
} from "@ozelot379/convert-minecraft-java-texture-to-bedrock";
import fs from "fs";
import PACKAGE from "./../package";
import yargs from "yargs";

(async () => {
    const argv = yargs(process.argv)
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
        await new ConvertJavaTextureToBedrock(
            new Input((await fs.promises.stat(argv.input)).isDirectory() ? new LocalFolderInputEntry(argv.input) : new LocalFileInputEntry(argv.input)),
            (argv.output.includes(".") ? new LocalFileOutput(argv.output) : new LocalFolderOutput(argv.output)),
            (argv.log ? new ConsoleLog() : new SilentLog()),
            {
                experimental: argv.experimental
            }
        ).convert();
    } catch (err) {
        console.error(err.message);

        process.exit(1);
    }
})();
