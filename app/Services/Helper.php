<?php

use App\User;

if (! function_exists('_asset')) {
    /**
     * Load the asset from our assets JSON file.
     *
     * @param string $subPath
     *
     * @return string $filePath
     */
    function _asset(string $subPath) : string {
        $assets = json_decode(file_get_contents('assets.json'), true);
        return $assets[$subPath] ?? '';
    }
}

if (! function_exists('_test_user')) {
    /**
     * Login and get the then authenticated user.
     *
     * @return App\User
     */
    function _test_user() {
        $token = auth()->guard('api')->login(User::first());
        $user = auth()->guard('api')->user();

        $user->auth_token = $token;

        $user->update();

        return $user;
    }
}

?>
