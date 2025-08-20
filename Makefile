run: bundle
	cd dist && python3 -m http.server

build:
	effekt --backend js-web index.effekt

bundle: build
	npm run bundle
