.PHONY: execute
execute : package.json
	npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch