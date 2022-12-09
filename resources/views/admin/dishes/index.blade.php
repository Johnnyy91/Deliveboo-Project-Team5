@extends('layouts.app') <!--estendo layout.app-->

@section('content')

<h1>MENU'</h1>
@foreach ($dishes as $item)


    Name:{{$item->name}} <span class="mx-5">Price:{{$item->price}}</span>
    <form class="mt-3" method="POST" action="{{ route('admin.dishes.destroy', $item->id) }}">
        @csrf
        @method('DELETE')
        <input class="btn btn-success mb-3"onclick="return confirm('Do you really want to delete this dish?')" type="submit" value="Delete">
    </form>



@endforeach
@endsection
