import DefaultChangelogParser from './changelog-parsers/default';
import KeepAChangelogParser from './changelog-parsers/keep-a-changelog';
import Changelog from "./entities/changelog";

export default class ChangelogParser {
  private parsers = [new KeepAChangelogParser(), new DefaultChangelogParser()];

  parse (changelog: string, knownVersion: string): Changelog|undefined {
    const parser = this.chooseParser(changelog);
    return parser && parser.parse(changelog, knownVersion);
  }

  private chooseParser (changelog: string) {
    return this.parsers.find(parser => parser.isOfType(changelog));
  }
}