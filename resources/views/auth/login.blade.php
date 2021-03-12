@foreach ($errors->all() as $error)

    <div class="error">{{ $error }}</div>

@endforeach

<form action="{{ route('login') }}" method="post">
    @csrf
    <label for="email">email: </label><input type="email" name="email" value="{{ old('email') }}">
    <label for="password">password: </label><input type="password" name="password">
    <button>login</button>
</form>