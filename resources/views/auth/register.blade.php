@foreach ($errors->all() as $error)

    <div class="error">{{ $error }}</div>

@endforeach

<div class="register__form">
    <form action="{{ route("register") }}" method="post">
        @csrf

        <label for="nickname">nickname: </label>
        <input type="text" name="nickname" value="{{ old('nickname') }}">

        <label for="email">email: </label>
        <input type="email" name="email" value="{{ old('email') }}">

        <label for="password">password: </label>
        <input type="password" name="password" value="">

        <label for="password_confirmation">confirm password</label>
        <input type="password" name="password_confirmation" value="">

        <button>Register</button>
    </form>
</div>