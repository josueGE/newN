<?php

use App\Http\Controllers\API\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
  
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BlogController;
use Illuminate\Support\Facades\Auth;

// Route::get('/', function () {
//     $user=Auth::user();
//     if ($user->handle()){
//         echo "eres usuario administrador";
//     }else
//     {
//         echo "eres estudiante";
//     }
// });
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'registro']);
Route::get('index', [AdminController::class, 'index']);
Route::get('email', [AuthController::class, 'mostrarEmail']);
Route::post('Validar', [AuthController::class, 'validar']);

Route::middleware('auth:sanctum')->group( function () {
    Route::resource('blogs', BlogController::class);
});
