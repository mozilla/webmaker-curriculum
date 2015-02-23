# Webmaker Whitepaper -- Readme

## Authorship

See <https://wiki.mozilla.org/Webmaker/Whitepaper> for more information.

## Development

Make sure to have **grunt** installed globally.

	npm install -g grunt-cli

Next run `npm install`, followed by `grunt` to get the development server running.

#### Play nice

* remove trailing whitespace from files before save
* don't use non-ascii file names
* run `grunt build` before commit (and make sure there are no errors)

Do all this w/ ease!

	mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
	echo "\n# run grunt build before commit, abort if errors\ngrunt" >> .git/hooks/pre-commit

## License
### Code
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at <http://mozilla.org/MPL/2.0/>.

### Content

	Details to come.
